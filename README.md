# Grouparoo App Example (Profiles from CSV)

This project shows to how to pull in data from a remote CSV file.
In this case, it is the primary data, but this approach can also be used to supplement data from another source (like a database).

## Commands that generated this project

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

grouparoo generate group:calculated all_profiles
# add rule to say all users with an user_id
```

## Next steps

First, you will need to run `npm install`.

Then, you could create a destination to send these profiles to.
For example, for Mailchimp:

```sh
grouparoo install @grouparoo/mailchimp

grouparoo generate mailchimp:app mailchimp
# enter api key

grouparoo generate mailchimp:email:destination newsletter --parent mailchimp
# add the list id for your newsletter
# set the group to all_profiles group
# map email_address, FNAME, LNAME, etc.
```

Get more details [here](https://www.grouparoo.com/docs/tutorials/app-example-config) and see the results [here](https://github.com/grouparoo/app-example-config).

## Other Grouparoo Examples

Visit https://github.com/grouparoo/app-examples to see other Grouparoo Example Projects.
