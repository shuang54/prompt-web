
import NextLink from 'next/link'
import { Link } from '@nextui-org/link'
import { button as buttonStyles } from '@nextui-org/theme'
import { GithubIcon } from '@/components/icons'
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives'

import Note from '@/components/Index/Note'
import FutureOutlook from '@/components/Index/FutureOutlook'
import Hero from '@/components/Index/Hero'

import Classification from '@/components/Index/Classification';

export default function Home() {

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<Hero />
			{/* GetStart button */}
			<div className="flex gap-3 mt-10">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className={buttonStyles({
						color: 'primary',
						radius: 'full',
						variant: 'shadow',
						size: 'lg'
					})}
				>
					&nbsp; Get Start &nbsp;
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({
						variant: 'bordered',
						radius: 'full',
						size: 'lg'
					})}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<Classification/>
			

			<Note />
			
			<FutureOutlook />

    </section>
  )
}
