import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/ui/panel"

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="font-mono text-sm leading-relaxed text-foreground space-y-4">
          <p>Hi, I’m Nihal. I’m an AI/ML Software Development Engineer (SDE)</p>
          <p>Here are a few facts about me:</p>
          <ul className="list-disc list-outside space-y-2 ml-4 marker:text-muted-foreground">
            <li>Data Analyst at @Tacttree</li>
            <li>Former Placement Coordinator @Parul University</li>
          </ul>
        </div>
      </PanelContent>
    </Panel>
  )
}
