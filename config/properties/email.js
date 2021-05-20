exports.default = async function buildConfig() {
  return [
    {
      id: "email",
      name: "Email",
      class: "property",
      sourceId: "profiles", // The ID of the Source that this Property belongs to - e.g. `sourceId: "csv_app"`
      type: "email", // The type of the Property.  Options are: "boolean", "date", "email", "float", "integer", "phoneNumber", "string", "url"
      unique: true, // Will Profiles have unique records for this Property?
      identifying: true, // Should we consider this property Identifying in the UI? Only one Property can be identifying.
      isArray: false, // Is this an Array Property?
      options: {
        column: "email", // The column to use for this Property from the CSV - e.g. `column: "first_name"`
        aggregationMethod: "exact",
      },
    },
  ];
};
