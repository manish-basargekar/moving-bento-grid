import { useEffect, useMemo, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { TabKey } from "../App";
import {
  ContactLayouts,
  HomeLayouts,
  NotesLayouts,
  WorkLayouts,
  keys,
} from "../utils/layout.helper";

interface LayoutProps {
  tab: TabKey;
  setTab: React.Dispatch<React.SetStateAction<TabKey>>;
  left?: number;
  sliderWidth?: number;
}

function Layout({ tab }: LayoutProps) {
  const [currentlayout, setCurrentLayout] = useState(HomeLayouts);

  useEffect(() => {
    switch (tab) {
      case TabKey.Work:
        setCurrentLayout(WorkLayouts);
        break;
      case TabKey.Home:
        setCurrentLayout(HomeLayouts);
        break;
      case TabKey.Contact:
        setCurrentLayout(ContactLayouts);
        break;
      case TabKey.Blog:
        setCurrentLayout(NotesLayouts);
        break;
      default:
        setCurrentLayout(HomeLayouts);
    }
  }, [tab]);

  const ResponsiveReactGridLayout = useMemo(
    () => WidthProvider(Responsive),
    []
  );

  return (
    <div className="w-screen m-auto flex justify-between b-10">
      <ResponsiveReactGridLayout
        className="m-auto w-[900px]"
        breakpoints={{ xl: 1200, lg: 899, md: 768, sm: 480, xs: 200 }}
        cols={{ xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
        rowHeight={300}
        layouts={currentlayout}
      >
        {keys.map((key) => (
          <div
            key={key}
            className="bg-[#f5f5f7] flex justify-center items-center shadow-[inset_0_0_0_2px_rgba(0,0,0,0)] rounded-2xl text-2xl text-[#1d1d1f] visible cursor-grab active:cursor-grabbing"
          >
            <Block keyProp={key} />
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
}

const Block = ({ keyProp }: { keyProp: string }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-6 bg-white text-[var(--black-1)] rounded-2xl text-3xl uppercase">
      {keyProp}
    </div>
  );
};

export default Layout;
