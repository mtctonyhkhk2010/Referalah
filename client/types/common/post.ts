import { TPostStatusType } from "@/types/common/post-status"
import { EReferralType } from "@/types/common/referral-type"

export interface IPost {
  id: number
  type: EReferralType
  created_at: string | null // date time string
  created_by: string | null
  uuid: string | null
  description: string | null
  company_name: string | null
  job_title: string | null
  year_of_experience: number | null
  country_uuid: string | null
  province_uuid: string | null
  city_uuid: string | null
  industry_uuid: string | null
  url: string | null
  status: TPostStatusType
  contact_request_count: number
}
