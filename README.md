## Grouparoo App Example (Profiles from CSV)

This project shows to how to pull in data from a remote CSV file.
In this case, it is the primary data, but this approach can also be used to supplement data from another source (like a database).

### Commands that generate this project

```sh
grouparoo init app-example-csv
grouparoo install @grouparoo/csv

grouparoo generate csv:app csv_app

grouparoo generate csv:source:remote profiles --parent csv_app
# update with url of profiles.csv
# set id column as bootstrap
# uncomment schedule
# bug workaround - change type to csv-remote-import (fixed in https://github.com/grouparoo/grouparoo/pull/1663)

grouparoo generate csv:property email --parent profiles
# set column as email

grouparoo generate csv:property first_name --parent profiles
# set column as first_name

grouparoo generate csv:property last_name --parent profiles
# set column as last_name

grouparoo generate csv:property deactivated --parent profiles
# set column as deactivated and type as boolean
```
