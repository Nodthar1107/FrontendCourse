export default function() {
    return {
        visitor: {
            CallExpression(path) {
                const { callee } = path.node;
                
                // Проверяем, является ли callee MemberExpression с console.log
                if (callee.type === 'MemberExpression' && 
                    callee.object?.name === 'console' && 
                    callee.property?.name === 'log') {
                    path.remove();
                }
            }
        }
    }
}