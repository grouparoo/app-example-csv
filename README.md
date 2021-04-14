## Grouparoo App Example (Profiles from CSV)


### Commands that generate this project

```sh
grouparoo init app-example-csv
grouparoo install @grouparoo/csv
grouparoo generate csv:app csv_app
grouparoo generate csv:source:remote profiles --parent csv_app
# update with url of profiles.csv
# set id column as bootstrap
# uncomment schedule
grouparoo generate csv:property email --parent profiles
# set column as email
grouparoo generate csv:property first_name --parent profiles
# set column as first_name
grouparoo generate csv:property last_name --parent profiles
# set column as last_name
grouparoo generate csv:property deactivated --parent profiles
# set column as deactivated and type as boolean
```