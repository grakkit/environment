const { async, context, fetch, file, push } = require('./index.js');

async(() => {
   try {
      const info = JSON.parse(context.meta);
      switch (info.operation) {
         case 'fetch.read': {
            context.emit(info.uuid, fetch(info.link).read());
            break;
         }
         case 'file.read': {
            context.emit(info.uuid, file(info.path).read() || '');
            break;
         }
         case 'file.write': {
            file(info.path).write(info.content);
            context.emit(info.uuid, '');
            break;
         }
      }
   } catch (error) {
      console.error('An error occured while performing an async operation!');
      console.error(error.stack || error.message || error);
   }
   push(context.destroy);
});
