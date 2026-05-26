"use client";

import Widget from "@/components/ui/Widget/Widget";
import { useContent } from "@/context/LocaleContext";

interface Props {
  displayed?: boolean;
}

export default function AboutWidget({ displayed: _displayed }: Props) {
  const content = useContent();
  return (
    <Widget title={content.ui.widgets.about}>
      <p>{content.about}</p>
    </Widget>
  );
}
