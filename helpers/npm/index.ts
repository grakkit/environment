import { jiFile } from '@grakkit/server-classes';
import { command, root, type } from '@grakkit/server';

const Runtime = type('java.lang.Runtime');

const runtime = Runtime.getRuntime();
const validator = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

command({
   name: 'npm',
   permission: 'grakkit.command.npm',
   execute (sender, action, target) {
      if (action && target) {
         if ([ 'install', 'remove', 'update' ].includes(action)) {
            if (validator.test(target)) {
               sender.sendMessage(`\xa7b[npm ${action} ${target}] \xa77Operation in progress...`);
               const process = runtime.exec(`npm install -y ${target}`, null, root.io as jiFile);
               const timer = setInterval(() => {
                  if (!process.isAlive()) {
                     clearInterval(timer);
                     if (process.exitValue() === 0) {
                        sender.sendMessage(`\xa7f[npm ${action} ${target}] \xa7aOperation complete!`);
                     } else {
                        sender.sendMessage(`\xa7f[npm ${action} ${target}] \xa7cOperation failed!`);
                     }
                  }
               });
            } else {
               sender.sendMessage(
                  `\xa7cThat target (${target}) is invalid! Example Targets: [ \xa7bprimatus\xa7c, \xa7b@grakkit/server\xa7c ]`
               );
            }
         } else {
            sender.sendMessage(
               `\xa7cThat action (${action}) is invalid! Valid Actions: [ \xa7binstall\xa7c, \xa7bupdate\xa7c, \xa7bremove\xa7c ]`
            );
         }
      } else {
         sender.sendMessage('\xa77Usage: \xa73/npm \xa76<install|update|remove> \xa76<target>');
      }
   },
   tabComplete (sender, ...args) {
      switch (args.length) {
         case 1:
            return [ 'install', 'remove' ];
         case 2:
            return [ '@grakkit/server', '@grakkit/codify', '@grakkit/npm', '@harrix432/mantle', 'primatus' ];
      }
   }
});
