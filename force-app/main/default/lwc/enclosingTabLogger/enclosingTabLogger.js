import { LightningElement, wire } from 'lwc';
import { EnclosingTabId } from 'lightning/platformWorkspaceApi';

export default class EnclosingTabLogger extends LightningElement {
    @wire(EnclosingTabId) enclosingTabId;
}