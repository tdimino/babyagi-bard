import { Block } from '@/types';
import { getEmoji, getTitle } from '@/utils/message';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

export interface LabelBlockProps {
  block: Block;
}

export const LabelBlock: React.FC<LabelBlockProps> = ({ block }) => {
  const { icon, type, title, content } = block.messages[0];
  const emoji = icon || getEmoji(type);
  const blockTitle = title || getTitle(type);

  const renderEmoji = () => (
    <div className="flex aspect-square h-9 items-center justify-center border-neutral-200 text-lg">
      {emoji}
    </div>
  );

  const renderContent = () => (
    <div className="focus:border-1 prose prose-neutral w-full dark:prose-invert prose-pre:bg-neutral-200 prose-pre:text-black dark:prose-pre:bg-neutral-800 dark:prose-pre:text-white">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {`### ${blockTitle}\n${content}`}
      </ReactMarkdown>
    </div>
  );

  return (
    <div className="relative m-auto flex w-full flex-col gap-4 p-6 px-4 text-base text-neutral-900 md:max-w-2xl md:gap-6 md:p-8 lg:max-w-2xl lg:px-0 xl:max-w-3xl">
      <div className="flex flex-col">
        <div className="flex gap-4 px-6">
          {renderEmoji()}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
