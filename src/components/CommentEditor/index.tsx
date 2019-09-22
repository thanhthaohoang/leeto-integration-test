import React from 'react';
import { Comment, Avatar, Form, Input } from 'antd';
import Text from '../Text';
import Button from '../Button';
import { Container } from './styles';

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
      <Container>
        <Text text="Commentaires" style={{ fontSize: 16, color: '#171725', fontWeight: 'bold' }}/>
        <Comment
          avatar={
            <Avatar
              src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="Avatr"
            />
          }
          content={this.renderEditor()}
        />
      </Container>
    )
  }
};

export default CommentEditor;