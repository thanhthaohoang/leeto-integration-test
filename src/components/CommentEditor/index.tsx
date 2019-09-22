import React from 'react';
import { Comment, Avatar, Form, Button, Input } from 'antd';

const { TextArea } = Input;

class CommentEditor extends React.Component {
  state = {
    comment: ''
  }

  onChangeText(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ comment: e.target.value })
  }

  renderEditor() {
    const { comment } = this.state;
    return (
      <div>
        <Form.Item>
          <TextArea rows={4} onChange={e => this.onChangeText(e)} value={comment} />
        </Form.Item>
        <Form.Item>
          <Button type='primary'>
            Envoyer
          </Button>
        </Form.Item>
      </div>
    );
  }

  render() {
    return (
      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={this.renderEditor()}
      />
    )
  }
};

export default CommentEditor;