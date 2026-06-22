import type { CSSProperties } from 'react';
import { Sparkles } from 'lucide-react';

type PilotMessage = {
  title: string;
  body: string;
};

type PilotMessageGlassCardProps = {
  eyebrow?: string;
  title?: string;
  messages: PilotMessage[];
  compact?: boolean;
};

function PilotMessageGlassCard({
  eyebrow = 'Presentation focus',
  title = 'A calm, measurable pilot story',
  messages,
  compact = false,
}: PilotMessageGlassCardProps) {
  return (
    <aside className={`pilotGlassCard ${compact ? 'compact' : ''}`} aria-label={title}>
      <div className="glassShine" aria-hidden="true" />
      <div className="glassHeader">
        <span className="glassIcon">
          <Sparkles size={16} />
        </span>
        <div>
          <p>{eyebrow}</p>
          <strong>{title}</strong>
        </div>
      </div>
      <div className="glassMessages">
        {messages.map((message, index) => (
          <article
            className="glassMessage"
            key={message.title}
            style={{ '--delay': `${140 + index * 120}ms` } as CSSProperties}
          >
            <strong>{message.title}</strong>
            <span>{message.body}</span>
          </article>
        ))}
      </div>
    </aside>
  );
}

export default PilotMessageGlassCard;
