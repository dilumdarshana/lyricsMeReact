const logger = (state) => (next) => (action) => {
    console.log('Logged action: ', action);
    next(action);
};

export default logger;