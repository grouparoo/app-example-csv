exports.default = async function buildConfig() {
  return [
    {
      id: "last_name",
      name: "Last Name",
      class: "property",
      sourceId: "profiles", // The ID of the Source that this Property belongs to - e.g. `sourceId: "csv_app"`
      type: "string", // The type of the Property.  Options are: "boolean", "date", "email", "float", "integer", "phoneNumber", "string", "url"
      unique: false, // Will Profiles have unique records for this Property?
      identifying: false, // Should we consider this property Identifying in the UI? Only one Property can be identifying.
      isArray: false, // Is this an Array Property?
      options: {
        column: "last_name", // The column to use for this Property from the CSV - e.g. `column: "first_name"`
        aggregationMethod: "exact",
      },
    },
  ];
};
