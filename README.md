# GitHub-user-activity

This project is a simple command line interface (CLI) to fetch the recent public activity of a GitHub user and display it in the terminal. It demonstrates working with APIs, handling JSON data, and building a CLI application in Node.js.

## Features
- Fetches recent public events for a specified GitHub user
- Filters events by a specified event type (e.g., PushEvent, PullRequestEvent)
- Displays the filtered events in the terminal

## Usage

Run the CLI with the following command:

```
node app.js <github-username> <event-type>
```

- `<github-username>`: The GitHub username you want to fetch events for
- `<event-type>`: The type of event to filter by (e.g., `push`, `pullrequest`). The CLI will automatically format this to match GitHub's event type naming (e.g., `PushEvent`, `PullRequestEvent`).

### Example

To fetch and display all push events for the user `octocat`:

```
node app.js octocat push
```

This will output all `PushEvent` activities for the user `octocat`.

## Requirements
- Node.js v14 or higher

## Notes
- The script uses the GitHub public API and requires a valid `User-Agent` header (handled in the code).
- Make sure to provide both arguments, otherwise the script will throw an error.

## References
- [GitHub User Activity Project on roadmap.sh](https://roadmap.sh/projects/github-user-activity)
