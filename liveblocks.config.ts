import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { Point, Color, Layer } from "./src/types";

const client = createClient({
  authEndpoint: "/api/auth",
});


type Presence = {
  selection: string[];
  cursor: Point | null;
  pencilDraft: [x: number, y: number, pressure: number][] | null;
  penColor: Color | null;
};


type Storage = {
  layers: LiveMap<string, LiveObject<Layer>>;
  layerIds: LiveList<string>;
};


export const {
  suspense: {
    RoomProvider,
    useCanRedo,
    useCanUndo,
    useHistory,
    useMutation,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useRoom,
    useSelf,
    useStorage,
    useUpdateMyPresence,
  },
} = createRoomContext<Presence, Storage>(client);
