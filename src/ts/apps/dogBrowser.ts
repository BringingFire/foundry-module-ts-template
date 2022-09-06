import { moduleId } from "../constants";

export default class DogBrowser extends Application {
  private imageUrl? = "";

  override get title(): string {
    return (game as Game).i18n.localize("MYMODULE.dog-browser");
  }

  static override get defaultOptions(): ApplicationOptions {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "dog-browser",
      template: `modules/${moduleId}/templates/dogs.hbs`,
      width: 720,
      height: 720,
    }) as ApplicationOptions;
  }

  override getData() {
    return {
      imageUrl: this.imageUrl,
    };
  }

  override activateListeners(html: JQuery<HTMLElement>): void {
    super.activateListeners(html);
    html
      .find("button.module-control")
      .on("click", this._onClickControlButton.bind(this));
  }

  async _onClickControlButton(event: Event): Promise<void> {
    event.preventDefault();
    const button = event.currentTarget as HTMLElement;
    const action = button.dataset.action;
    // const module = (game as Game).modules.get(moduleName) as MyModule;

    switch (action) {
      case "randomize-dog":
        this._randomizeDog();
        break;
    }
  }

  async _randomizeDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (response.status != 200) {
      ui.notifications?.error(
        `Unexpected response fetching new dog image: ${response.status}: ${response.statusText}`
      );
      return;
    }
    this.imageUrl = (await response.json()).message;
    this.render();
  }
}
