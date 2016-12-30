import React from 'react';
import {Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import Preview from './Preview';

export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});
    this.logState = () => console.log(this.state.editorState.toJS());
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  _onItalicClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }

  _onSaveClick() {
    this.state.publishState = this.state.editorState.getCurrentContent();
  }

  _onPublishClick() {
    console.log('clicked publish')
  }

  render() {

    const currentContent = this.state.editorState.getCurrentContent();
    const rawOutput = convertToRaw(currentContent);
    const blocks = rawOutput.blocks
      .filter(function(block) {
        return block.text !== "";
      })
      .map((block, index) => (
        <Preview
          text={block.text}
          index={index}
          key={index}
        />
    )).splice(0, rawOutput.blocks.length -1);



    // <div className="draft-preview">
    //      <pre><small>{JSON.stringify(rawOutput.blocks,null,'\t')}</small></pre>
    //    </div>

    return (
      <div>
      <div className="draft-preview">
          {blocks}
        </div>
      <div className='wysiwyg chat-input'>

        <div className="draft-controls">
          <button onClick={() => {this._onBoldClick();}}>Bold</button>
          <button onClick={() => {this._onItalicClick();}}>Italic</button>
        </div>
        <Editor
          editorState={this.state.editorState} 
          onChange={this.onChange} 
          focus={this.focus}
          ref="editor"
          spellCheck={true}

        />
        <div className="draft-submission">
          <button className="save-draft" onClick={this.logState}>Log</button>
          <button className='save-draft' onClick={() => {this._onSaveClick();}}>Save Draft</button>
          <button className='publish-draft' onClick={this._onPublishClick.bind(this)}>Publish</button>
        </div>
      </div>
      
      </div>
    );
  }
}
