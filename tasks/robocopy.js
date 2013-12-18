exports.buildCommand = function(options) {
    var args = [];

    args.push(options.source);
    args.push(options.destination);
    args = args.concat(options.files);

    return {
        command: 'robocopy',
        args: args
    };
};
