import { ModuleData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/packages.mjs";
import DogBrowser from "./apps/dogBrowser";

export interface MyModule extends Game.ModuleData<ModuleData> {
  dogBrowser: DogBrowser;
}
