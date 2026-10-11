# Now

What I'm working on at the moment. Updated October 2026.

## October 2026

- **malware-detector:** [0.1.0 is out](https://pypi.org/project/malware-detector-py/), on
  PyPI and as a Docker image. Scans report any code an engine couldn't read instead of
  treating it as clean, and end with a summary of what was checked. Next: scanning a package
  by name, a baseline mode for existing findings, an official GitHub Action, and scanning
  what AI coding agents load: MCP servers, skills and plugins.
- **sentinel (new):** one command for secrets, dependency, SAST and IaC scanning, with one
  report, one severity scale, one baseline and one CI exit code. The user guide is written.
  It's the next release, ahead of jellyfish.
- **agentaint:** taint-analysis rules that trace data flows in AI agent code, for security
  and privacy alike. The CLI and most of the privacy rules are done: personal data and
  secrets reaching the OpenAI, Anthropic, Google, LangChain and Vercel AI SDKs, logs and
  analytics tools, plus project-declared data sources and LLM wrappers. Next: per-project
  settings for scanning real codebases, then a data map of which personal data goes to which
  vendor.
- **SecureVault:** the [documentation site](https://benzid-wael.github.io/secure-vault/) is
  live. Next: code-signed desktop builds.
- **jellyfish:** preparing for a public release, after sentinel.

---

Want to follow along? Watch the repositories on [GitHub](https://github.com/benzid-wael), or
[sponsor](https://github.com/sponsors/benzid-wael) to help these ship sooner.
