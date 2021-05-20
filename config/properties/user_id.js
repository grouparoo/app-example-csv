exports.default = async function buildConfig() {
  return [
    {
      id: "user_id",
      name: "User Id",
      class: "property",
      sourceId: "profiles", // The ID of the Source that this Property belongs to - e.g. `sourceId: "csv_app"`
      type: "integer", // The type of the Property.  Options are: "boolean", "date", "email", "float", "integer", "phoneNumber", "string", "url"
      unique: true, // Will Profiles have unique records for this Property?
      identifying: false, // Should we consider this property Identifying in the UI? Only one Property can be identifying.
      isArray: false, // Is this an Array Property?
      options: {
        column: "id", // The column to use for this Property from the CSV - e.g. `column: "first_name"`
        aggregationMethod: "exact",
      },
    },
  ];
};
