import { moduleName } from "../constants";

export default class DogBrowser extends Application {
  override get title(): string {
    return "Dog Browser";
  }

  static override get defaultOptions(): ApplicationOptions {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "dog-browser",
      template: `modules/${moduleName}/templates/dogs.hbs`,
      width: 720,
      height: "auto",
    }) as ApplicationOptions;
  }
}
