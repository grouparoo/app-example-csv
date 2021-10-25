exports.default = async function buildConfig() {
  return [
    /**
     * --------------------
     * Source
     * --------------------
     */
    {
      class: "source",
      id: "profiles",
      name: "profiles",
      type: "csv-import-table",
      appId: "csv_app", // Set this value to the ID of the App this Source uses - e.g. `appId: "csv_app"`
      modelId: "profiles", // The ID of the Grouparoo Model that this Source will contribute to
      options: {
        url: "https://docs.google.com/spreadsheets/d/1BX0aMv2HtudZ4nBpqYy1Ve_c0yt4k0mDA91spdw2lrk/export?format=csv", // The URL of a publicly available CSV file - e.g. `url: "https://example.com/data.csv"`
        fileAgeHours: 1, // The number of hours to cache a download of the remote CSV file before downloading it again and checking for changes.
      },

      /**
       * A list of mappings for this source as:
       *
       *     "csv_column": "grouparoo_property_id"
       *
       * For example, if your CSV files has an `id` column, and you want to map that to the
       * `user_id` property in this Grouparoo source, your mapping would look like:
       *
       *     mapping: { id: "user_id" }
       */
      mapping: {
        id: "user_id",
      },
    },

    /**
     * ---------------
     * Schedule
     * ---------------
     *
     * A Schedule tells Grouparoo how frequently to check the Source for updated
     * data and import it into the application database. If you would like to
     * set a Schedule for this Source, uncomment the following section.
     */
    {
      id: "profiles_schedule",
      name: "profiles_schedule",
      class: "schedule",
      sourceId: "profiles", // The ID of the Source this Schedule uses
      recurring: true, // should this Schedule regularly run?
      recurringFrequency: 1000 * 60 * 15, // 15 minutes, in ms
    },
  ];
};
