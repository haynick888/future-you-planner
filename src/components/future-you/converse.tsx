import adviser from "@/assets/adviser-rami.jpg";
import { Conversation, ConversationContent, ConversationScrollButton } from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import { PromptInput, PromptInputFooter, PromptInputSubmit, PromptInputTextarea } from "@/components/ai-elements/prompt-input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Plus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AppShell } from "./app-shell";

const prompts = ["How can I grow my business?", "Tell me about small business support programs", "Help me with services beyond financial planning"];
const threadNames = ["Growing my business", "Business support programs", "Planning beyond finance"];

type ChatMessage = { id: string; role: "user" | "assistant"; text: string };

export function Converse({ threadId = "welcome" }: { threadId?: string }) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "assistant", text: "Hi Samir — I’m Rami. I can help connect your financial plan with practical support for your business. Where would you like to begin?" },
  ]);

  useEffect(() => { inputRef.current?.focus(); }, [threadId, thinking]);

  const submit = ({ text }: { text: string }) => {
    const clean = text.trim();
    if (!clean || thinking) return;
    setMessages((current) => [...current, { id: crypto.randomUUID(), role: "user", text: clean }]);
    setThinking(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, { id: crypto.randomUUID(), role: "assistant", text: "That’s a useful place to start. I’d look at your goals, current cash flow, and the support programs you may qualify for, then turn those into a short action plan." }]);
      setThinking(false);
    }, 700);
  };

  const startPrompt = (prompt: string, index: number) => {
    navigate({ to: "/chat/$threadId", params: { threadId: `thread-${index + 1}` } });
    submit({ text: prompt });
  };

  return (
    <AppShell title="Good morning, Samir">
      <section className="flex items-center justify-between px-5 py-2">
        <Button variant="ghost" size="sm" onClick={() => setDrawerOpen(true)} className="border border-ice/10 bg-glass text-slate hover:bg-glass-strong hover:text-ice"><Menu /> Threads</Button>
        <Link to="/chat/$threadId" params={{ threadId: crypto.randomUUID() }} className="grid size-9 place-items-center rounded-md border border-ice/10 bg-glass text-cyan" aria-label="New conversation"><Plus className="size-4" /></Link>
      </section>

      <section className="mx-5 mt-2 flex min-h-[560px] flex-1 flex-col overflow-hidden rounded-lg border border-ice/12 bg-glass backdrop-blur-xl">
        <div className="flex items-center gap-3 border-b border-ice/10 p-4">
          <div className="relative shrink-0">
            <img src={adviser} alt="Rami, your Future You adviser" width={816} height={816} className="size-14 rounded-lg object-cover" />
            <span className="absolute bottom-0 right-0 size-3 rounded-full bg-cyan ring-2 ring-ink" />
          </div>
          <div className="min-w-0"><p className="font-display text-sm font-semibold">Rami Khoury</p><p className="text-[11px] text-slate">Future You adviser</p></div>
          <span className="ml-auto rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-1 text-[10px] font-semibold text-cyan">Online</span>
        </div>

        <Conversation className="min-h-0 flex-1">
          <ConversationContent className="gap-3 px-4 py-4">
            {messages.map((message) => (
              <Message key={message.id} from={message.role}>
                <MessageContent className={message.role === "user" ? "bg-cyan text-ink" : "text-ice"}>
                  <MessageResponse>{message.text}</MessageResponse>
                </MessageContent>
              </Message>
            ))}
            {messages.length === 1 && <div className="grid gap-2 pt-1">{prompts.map((prompt, index) => <Button key={prompt} variant="outline" onClick={() => startPrompt(prompt, index)} className="h-auto justify-between whitespace-normal border-ice/10 bg-ice/5 px-3 py-3 text-left text-xs leading-relaxed text-ice hover:bg-ice/10 hover:text-ice">{prompt}<span className="ml-2 text-cyan">→</span></Button>)}</div>}
            {thinking && <Message from="assistant"><MessageContent className="text-slate">Thinking…</MessageContent></Message>}
          </ConversationContent>
          <ConversationScrollButton className="border-ice/15 bg-ink text-cyan" />
        </Conversation>

        <div className="border-t border-ice/10 p-3">
          <PromptInput onSubmit={submit} className="[&_[data-slot=input-group]]:border-ice/12 [&_[data-slot=input-group]]:bg-ink/40">
            <PromptInputTextarea ref={inputRef} placeholder="Ask Rami anything…" className="min-h-16 text-ice placeholder:text-slate" />
            <PromptInputFooter className="justify-end pb-2 pt-0"><PromptInputSubmit status={thinking ? "submitted" : "ready"} disabled={thinking} className="bg-cyan text-ink hover:bg-cyan/90" /></PromptInputFooter>
          </PromptInput>
        </div>
      </section>

      {drawerOpen && <div className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm" onClick={() => setDrawerOpen(false)}><aside className="h-full w-[82%] max-w-sm border-r border-ice/10 bg-ink p-5 shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="flex items-center justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan">Converse</p><h2 className="mt-1 font-display text-xl font-semibold">Your threads</h2></div><Button size="icon-sm" variant="ghost" onClick={() => setDrawerOpen(false)} className="text-slate"><X /></Button></div><div className="mt-6 grid gap-2">{threadNames.map((name, index) => <Link key={name} to="/chat/$threadId" params={{ threadId: `thread-${index + 1}` }} onClick={() => setDrawerOpen(false)} className={`rounded-md border px-3 py-3 text-sm ${threadId === `thread-${index + 1}` ? "border-cyan/40 bg-cyan/10 text-cyan" : "border-ice/10 bg-glass text-ice"}`}>{name}<span className="mt-1 block text-[10px] text-slate">Today · Session only</span></Link>)}</div></aside></div>}
    </AppShell>
  );
}