(function () {
  var mount = document.querySelector("[data-projects]");
  if (!mount) return;

  fetch("/data/projects.json")
    .then(function (res) {
      if (!res.ok) throw new Error("registry");
      return res.json();
    })
    .then(function (data) {
      var items = (data && data.projects) || [];
      if (!items.length) {
        mount.innerHTML = "<li><div><strong>No projects yet.</strong></div></li>";
        return;
      }
      mount.innerHTML = items.map(card).join("");
    })
    .catch(function () {
      mount.innerHTML = "<li><div><strong>Project list did not load.</strong><span>Check data/projects.json.</span></div></li>";
    });

  function card(project) {
    var inner =
      '<span class="tag">' + esc(project.tag) + "</span>" +
      "<strong>" + esc(project.title) + "</strong>" +
      '<span class="status">' + esc(project.status) + "</span>" +
      "<span>" + esc(project.summary) + "</span>";
    if (project.href) {
      return '<li><a href="' + esc(project.href) + '">' + inner + "</a></li>";
    }
    return "<li><div>" + inner + "</div></li>";
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
