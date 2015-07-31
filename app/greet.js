function greet(name) {
    if (name === 'Helen') {
        return 'Dear Helen';
    }
    var GREETING_MSG = 'Hello';
    if (name) {
        return GREETING_MSG + ' ' + name;
    }
    return GREETING_MSG;
}
