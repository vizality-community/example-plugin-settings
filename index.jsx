const { Plugin } = require('@entities');

const Settings = require('./components/SettingsClass');

module.exports = class ExamplePluginSettings extends Plugin {
  onStart () {
    /*
     * This won't be required later, as it will be automatically generated based
     * on the existence of components/Settings.jsx
     */
    vizality.api.settings.registerDashboardSettings({
      id: 'Example Settings Plugin',
      render: Settings
    });
  }
};
