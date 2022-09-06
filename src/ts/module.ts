Hooks.on("renderActorDirectory", (_: Application, html: JQuery) => {
  const button = $(
    `<button class="cc-sidebar-button" type="button">🐶</button>`
  );
  button.on("click", () => {
    console.warn("DOG");
  });
  html.find(".directory-header .action-buttons").append(button);
});
