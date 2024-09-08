import { IconName } from '@fortawesome/fontawesome-common-types'
import { BubbleType } from '@type/bubble.type'

export interface MenuItemType {
    icon: IconName
    name: string
    route: string
    bubble?: BubbleType
    active?: boolean
}