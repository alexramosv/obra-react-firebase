# CONTRIBUTING

## Table of Contents

### A. Once per project

1. [`fork` the project](#fork-the-project)
2. [`clone` locally](#clone-locally)
3. [Sync data](#sync-data)

### B. Once per Pull Request

1. [Create the Pull Request `branch`](#create-the-pull-request-branch)
2. [Make changes locally](#make-changes-locally)
3. [`push` changes to the original project](#push-changes-to-the-original-project)
4. [Create your Pull Request on the Original Project](#create-your-pull-request-on-the-original-project)
5. [Make some new changes locally](#make-some-new-changes-locally)
6. [Delete local and remote branches](#delete-local-and-remote-branches)

### C. Tips and Tricks

1. [How to `fetch` changes from `upstream/master` into local `master`](#fetch-changes-from-upstream-into-local-master)
2. [How to `fetch` a Pull Request](#how-to-fetch-a-pull-request)
3. [How to `fetch` changes from `upstream/master` and `rebase` into local `master`](#fetch-changes-from-upstream-and-rebase)

### D. Additional Info

1. [Notes](#notes)
2. [Links](#links)

## A. Once per project

## <a id="fork-the-project">1. `fork` the project</a>

Simply click github's `fork` button.

## <a id="clone-locally">2. `clone` locally</a>

Clone your `fork`ed copy, **NOT** the original.

```console
❯ git clone git@github.com:<MY_USER>/obra-react-firebase.git
❯ cd obra-react-firebase
```

## <a id="sync-data">3. Sync data</a>

1. Add `upstream` `remote` for the original project.
2. `fetch` the original project.
3. Link your `fork`ed `master` branch with the original project `master` branch (`upstream/master`).

```console
❯ git remote add upstream git@github.com:ObradoiroTeo/obra-react-firebase.git
❯ git fetch upstream
❯ git branch --set-upstream-to=upstream/master master
```

## B. Once per Pull Request

## <a id="create-the-pull-request-branch">1. Create the Pull Request `branch`</a>

We used the completely arbitrary `pull-request` namespace.

```console
❯ git checkout -b pull-request/<MY_PR_BRANCH>
```

## <a id="make-changes-locally">2. Make changes locally</a>

Start working in your `pull-request/<MY_PR_BRANCH>` and try to make at least a `commit`.

```console
❯ git commit -m "WIP: Almost there"
```

## <a id="push-changes-to-the-original-project">3. `push` changes to the original project</a>

Get latest changes and `rebase` from `upstream/master`:

```console
❯ git fetch upstream
❯ git rebase upstream/master
```

Specify the `upstream` for our `pull-request/<MY_PR_BRANCH>` and then `push`:

```console
❯ git push --set-upstream origin pull-request/<MY_PR_BRANCH>
```

From now on, when you want to `push` just 👇

```console
❯ git fetch upstream
❯ git rebase upstream/master
❯ git push
```

## <a id="create-your-pull-request-on-the-original-project">4. Create your Pull Request on the Original Project</a>

Easy way:

1. Push `Compare and pull request` button.
2. Write your message.
3. Push `Create pull request`.

Hard way:

1. Push `New pull request` button.
2. Click on the `compare across forks` link.
3. Change the `head fork` to your personal `fork`.
4. Change `compare` to the branch you just pushed (`pull-request/<MY_PR_BRANCH>`).
5. Write your message.
6. Push `Create pull request`.

## <a id="make-some-new-changes-locally">5. Make some new changes locally</a>

```console
❯ git commit -m "WIP: Is it done?"
```

## <a id="delete-local-and-remote-branches">6. Delete local and remote branches</a>

Once you are done, head back to `master` and verify which `branch`es are in your system

```
❯ git checkout master
❯ git branch
```

Delete your local branch...

```
❯ git branch -d pull-request/<MY_PR_BRANCH>
```

...and the remote one

```
❯ git push origin --delete pull-request/<MY_PR_BRANCH>
```

Check again which `branch`es are in your system

```
❯ git branch
```

## C. Tips and Tricks

## <a id="fetch-changes-from-upstream-into-local-master">1. How to `fetch` changes from `upstream/master` into local `master`</a>

Change to `master` branch

```
❯ git checkout master
```

Check out commits in local repository

```
❯ git log
4940c1b Creadas todas las rutas necesarias para la obra (SaraMiri, 6 days ago)
f79c894 Add CHANGES.md and CONTRIBUTING.md guidelines (David G Chaves, 7 days ago)
2aa4aba Change favicon.ico (David G Chaves, 7 days ago)
41a2e12 Initial commit from Create React App (David G Chaves, 7 days ago)
```

Fetch changes and merge them

```
❯ git fetch upstream
❯ git merge --ff-only
```

Check out commits in local repository

```
❯ git log
2211d59 Fix problem with Routes (#3) (davidgchaves, 20 hours ago)
4940c1b Creadas todas las rutas necesarias para la obra (SaraMiri, 6 days ago)
f79c894 Add CHANGES.md and CONTRIBUTING.md guidelines (David G Chaves, 7 days ago)
2aa4aba Change favicon.ico (David G Chaves, 7 days ago)
41a2e12 Initial commit from Create React App (David G Chaves, 7 days ago)
```

## <a id="how-to-fetch-a-pull-request">2. How to `fetch` a Pull Request</a>

You need to know the Pull Request Number (`<PR_NUMBER>`) and the name of the local branch where you want to `fetch` the Pull Request (`<LOCAL_BRANCH>`)

```
❯ git fetch upstream refs/pull/<PR_NUMBER>/head:<LOCAL_BRANCH>
```

Example data:

- `<PR_NUMBER>`: 3.
- `<LOCAL_BRANCH>`: review-pull-request/3

```
❯ git checkout master
❯ git fetch upstream refs/pull/3/head:review-pull-request/3
❯ git checkout review-pull-request/3
```

## <a id="fetch-changes-from-upstream-and-rebase">3. How to `fetch` changes from `upstream/master` and `rebase` into local `master`</a>

From `pull-request/<WHATEVER>` branch

```
❯ git fetch upstream
❯ git rebase upstream/master
```

## D. Additional Info

## <a id="notes">1. Notes</a>

1. `--set-upstream` is equivalent to `-u`.
2. `push`ing updates to a `pull request` **will not** notify to the project mantainer, or anyone else watching the `pull request`.

## <a id="links">2. Links</a>

- [Egghead: How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
- [What open source project should I contribute to?](https://medium.com/@kentcdodds/what-open-source-project-should-i-contribute-to-7d50ecfe1cb4#.dou36jj12): ...with a nice `debugger;` trick to read source code.
