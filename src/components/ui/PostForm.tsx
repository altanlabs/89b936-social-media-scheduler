import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

export default function PostForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [platform, setPlatform] = useState('Facebook');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, platform });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Input
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <Select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        options={['Facebook', 'Twitter', 'Instagram']}
      />
      <Button type="submit">Schedule Post</Button>
    </form>
  );
}
