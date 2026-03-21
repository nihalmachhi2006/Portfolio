import { CollapsibleList } from "@/components/collapsible-list"

import { HACKATHONS } from "@/data/portfolio/hackathons"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "@/components/ui/panel"
import { HackathonItem } from "./hackathon-item"

export function Hackathons() {
  return (
    <Panel id="hackathons">
      <PanelHeader>
        <PanelTitle>
          Hackathons
          <PanelTitleSup>({HACKATHONS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={HACKATHONS}
        max={4}
        renderItem={(item) => <HackathonItem hackathon={item} />}
      />
    </Panel>
  )
}
