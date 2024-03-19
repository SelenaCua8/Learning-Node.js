¿Qué es Node.js?
Un entorno de ejecución de JavaScript, es decir, un sitio donde puedes ejecutar JavaScript.
-codigo abierto
-multiplataforma
-asincronco
-orientado a eventos
-monoproceso

Node.js® is an open-source, cross-platform JavaScript runtime environment.

¿Por qué aprender Node?
1. demanda de mercado
2. puedes usar todos conocimientos de javascript en este entorno de ejecución
3.Crear aplicaciones webs, APIS
4. Comunidad inmensa
5. Rápido, escalable, fácil de desplegar, barato / gratis

fnm --version
fnm
Commands:
list-remote: List all remote Node.js versions [aliases: ls-remote]
list: List all locally installed Node.js versions [aliases: ls]
install: Install a new Node.js version
use: Change Node.js version
env: Print and set up required enviroment variables for fnm
completetions: Print shell completions to stdout
alias: Alias a version to a common name
unalias: Remove an alias definition
default: Set a version as the default version
current: Print the current Node.js version
uninstall: Uninstall a Node.js version
help: Print this message or the help of the given subcommand(s)
Options:
 --node-dist-mirror <NODE_DIST_MIRROR>
          https://nodejs.org/dist/ mirror [env: FNM_NODE_DIST_MIRROR] [default: https://nodejs.org/dist]
      --fnm-dir <BASE_DIR>
          The root directory of fnm installations [env: FNM_DIR]
      --log-level <LOG_LEVEL>
          The log level of fnm commands [env: FNM_LOGLEVEL] [default: info] [possible values: quiet, error, info]
      --arch <ARCH>
          Override the architecture of the installed Node binary. Defaults to arch of fnm binary [env: FNM_ARCH]
      --version-file-strategy <VERSION_FILE_STRATEGY>
          A strategy for how to resolve the Node version. Used whenever `fnm use` or `fnm install` is called without a version, or when `--use-on-cd` is configured on evaluation [env: FNM_VERSION_FILE_STRATEGY] [default: local] [possible values: local, recursive]
      --corepack-enabled
          Enable corepack support for each new installation. This will make fnm call `corepack enable` on every Node.js installation. For more information about corepack see https://nodejs.org/api/corepack.html [env: FNM_COREPACK_ENABLED]
      --resolve-engines
          Resolve `engines.node` field in `package.json` whenever a `.node-version` or `.nvmrc` file is not present.
          Experimental: This feature is subject to change.
          Note: `engines.node` can be any semver range, with the latest satisfying version being resolved. [env: FNM_RESOLVE_ENGINES]
  -h, --help
          Print help (see more with '--help')
  -V, --version
          Print version

.help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file
