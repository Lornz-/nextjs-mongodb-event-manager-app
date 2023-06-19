const IS_BROWSER = typeof window !== 'undefined';

export const setupMocks = async () => {
  if (IS_BROWSER) {
    const { worker } = await import('./worker');
    worker.start();
  } else {
    const { server } = await import('./server');
    server.listen();
  }
};
