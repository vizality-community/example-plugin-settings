import { Plugin } from '@vizality/entities';

import Settings from './components/SettingsFunctional';

export default class ExamplePluginSettings extends Plugin {
  onStart () {
    /*
     * This won't be required later, as it will be automatically generated based
     * on the existence of components/Settings.jsx
     */
    vizality.api.settings.registerAddonSettings({
      id: this.addonId,
      render: Settings
    });
  }
}
