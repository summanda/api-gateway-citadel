import * as moduleAlias from 'module-alias';
import { createServer } from './Config/Server';
import http from 'http';
import { AddressInfo } from 'net';

const sourcePath = 'src';

moduleAlias.addAliases({
    '@src': sourcePath,
    '@Config': `${sourcePath}/Config`,
    '@Controller': `${sourcePath}/Controller`,
    '@Middleware': `${sourcePath}/Middleware`
});

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '8005';

const startServer = async () => {
    const app = await createServer();

    const server = http.createServer(app).listen({ host, port }, () => {
        const addressInfo = server.address() as AddressInfo;
        console.log(`Server started to listen at http://${addressInfo.address}:${addressInfo.port}`);
    });

    const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
    signalTraps.forEach((type) => {
        process.once(type, async () => {
            console.log(`process.once ${type}`);
            server.close(() => console.log('HTTP Server is closed down'));
        });
    });
}

startServer();