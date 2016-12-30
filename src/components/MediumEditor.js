import React from 'react';
import { Editor, createEditorState, RichUtils } from 'medium-draft';
import 'medium-draft/lib/index.css';


export default class MediumEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorState(), // for empty content
    };

    /*
    this.state = {
      editorState: createEditorState(data), // with content
    };
    */

    this.onChange = (editorState) => {
      this.setState({ editorState });
    };
  }

  componentDidMount() {
    this.refs.editor.focus();
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  _onItalicClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }

  _onSaveClick() {
    console.log('clicked save');
  }

  _onPublishClick() {
    console.log('clicked publish')
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className='wysiwyg'>
        <div className="draft-controls">
          <button onClick={() => {this._onBoldClick();}}>Bold</button>
          <button onClick={() => {this._onItalicClick();}}>Italic</button>
        </div>
      <Editor
        ref="editor"
        editorState={editorState}
        onChange={this.onChange} 
      />
      <div className="draft-submission">
          <button className="save-draft" onClick={this.logState}>Log</button>
          <button className='save-draft' onClick={() => {this._onSaveClick();}}>Save Draft</button>
          <button className='publish-draft' onClick={this._onPublishClick.bind(this)}>Publish</button>
        </div>
      </div>
    );
  }
};