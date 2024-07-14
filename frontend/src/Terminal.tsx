import React, {useRef, useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './Terminal.css';

interface TerminalProps {
    // Add any additional props you need
}

const Terminal: React.FC<TerminalProps> = () => {
    const [command, setCommand] = useState('');
    const [output, setOutput] = useState('');
    const terminalRef = useRef<HTMLDivElement>(null);

    const handleCommandChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommand(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Simulate executing the command and generating output
        const response = executeCommand(command);
        setOutput((prevOutput) => prevOutput + response + '\n');

        // Clear the command input
        setCommand('');

        // Scroll to the bottom of the terminal
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    };

    const executeCommand = (command: string) => {
        // Implement your own logic to execute the command and generate output
        // For example, you can use a switch statement or an if-else chain to handle different commands

        // In this example, we'll just return a placeholder response
        return `$ ${command}\nOutput: This is the result of executing the command "${command}".`;
    };

    return (
        <div className="terminal">
            <div className="terminal-header">
                <span>Terminal</span>
            </div>
            <div className="terminal-body" ref={terminalRef}>
                <pre>{output}</pre>
                <form onSubmit={handleSubmit}>
                    <TextareaAutosize
                        className="terminal-input"
                        value={command}
                        onChange={handleCommandChange}
                        placeholder="$ Enter command"
                    />
                </form>
            </div>
        </div>
    );
};

export default Terminal;
