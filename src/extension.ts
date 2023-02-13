import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vs-devio-opener" is now active!');

	let disposable = vscode.commands.registerCommand('vs-devio-opener.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vs-devio-opener!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
