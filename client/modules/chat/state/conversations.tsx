import { create } from "zustand"

export interface IConversation {
  uuid: string
  isReceiverAccepted: boolean
  sender: {
    uuid: string
    companyName: string | null
    jobTitle: string | null
    avatarUrl: string | null
    username: string
  }
  receiver: {
    uuid: string
    companyName: string | null
    jobTitle: string | null
    avatarUrl: string | null
    username: string
  }
  lastMessage: {
    createdByUuid: string
    body: string
    createdAt: string
    isDocumentExpired: boolean
  } | null
}

interface IConversationState {
  conversations: IConversation[]
  setConversations: (arg: IConversation[]) => void
}
const useConversationStore = create<IConversationState>((set) => ({
  conversations: [],
  setConversations: (arg) => {
    set((state) => ({
      ...state,
      conversations: [...arg],
    }))
  },
}))

export default useConversationStore
