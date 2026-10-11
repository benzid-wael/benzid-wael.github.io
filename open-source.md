# Open source

Most security incidents I've worked on came down to the secure option being harder than the
insecure one. I build developer tools that flip that: they run locally, fit into workflows
engineers already have, and don't need an account or a cloud service.

## Released

### <img class="project-logo" src="/logos/malware-detector.svg" alt="">[malware-detector](https://benzid-wael.github.io/malware-detector/)

**Catch malicious code before it ships.** A poisoned dependency or a hidden backdoor runs with
your team's full access. One offline command checks JavaScript, TypeScript, Python and PHP, and
its combined engines catch **91%** of real-world malware samples, more than any engine alone.

```sh
uv tool install malware-detector-py   # or: pipx install malware-detector-py
```

[Docs](https://benzid-wael.github.io/malware-detector/) ·
[GitHub](https://github.com/benzid-wael/malware-detector) ·
[PyPI](https://pypi.org/project/malware-detector-py/)

### <img class="project-logo" src="/logos/secure-vault.png" alt="">[SecureVault](https://benzid-wael.github.io/secure-vault/)

**Your secrets, on your machine.** Every cloud secrets manager is one more place your keys can
leak from. SecureVault keeps passwords and `.env` files in encrypted vaults you control, and
injects them straight into your commands. No server, no sync, no account.

```sh
npm install -g @benzid.wael/secure-vault
```

[Docs](https://benzid-wael.github.io/secure-vault/) ·
[GitHub](https://github.com/benzid-wael/secure-vault) ·
[npm](https://www.npmjs.com/package/@benzid.wael/secure-vault) ·
[Desktop app downloads](https://github.com/benzid-wael/secure-vault/releases/latest)

## In progress

These aren't public yet. Sponsorship directly decides how soon they ship.

### <img class="project-logo" src="/logos/sentinel.svg" alt="">sentinel

**Every security scanner, one verdict.** Secrets, vulnerable dependencies, risky code and
misconfigured infrastructure each need their own tool, and the glue between them is where
checks quietly stop running. sentinel turns them into one report and one pass/fail, and tells
you when a scanner didn't run. Next to be released.

### <img class="project-logo" src="/logos/agentaint.svg" alt="">agentaint

**Know where your AI agent can be hijacked, and where it leaks data.** A web page or a document
can steer what your agent does, and customer data slips into prompts, logs and third-party SDKs
without anyone deciding it should. agentaint traces both in agent and MCP server code, before
they reach production.

### <span class="project-logo ignore-header">🪼</span>jellyfish {#jellyfish}

**Small pull requests, without the pain.** Small PRs get reviewed faster and break less, but
juggling a chain of them by hand is tedious. jellyfish manages the whole stack with one command
each, and lets AI coding agents do it too.

### <img class="project-logo" src="/logos/10xeng.svg" alt="">10xeng

**From code to production and back, in one toolkit.** Teams lose days to glue: scaffolding
services, wiring CI/CD, running local environments, and working out what broke in production.
10xeng covers that whole loop with small, independent CLIs that build on the tools you already
use.

## Support this work

::: tip
If these tools help you or your team, [**sponsor me on GitHub ❤**](https://github.com/sponsors/benzid-wael).
Sponsorship buys focused time to maintain the released tools and ship the ones in progress.
Using them at work? Ask your company to sponsor.
:::
