const { Plugin } = require('@vizality/entities');

const Settings = require('./components/SettingsFunctional');

module.exports = class ExamplePluginSettings extends Plugin {
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
};
