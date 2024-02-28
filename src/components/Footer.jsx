import React from 'react'



function Footer() {
  return (
    
   <footer class="px-1 divide-y dark:bg-gray-800 dark:text-gray-100">
	<div class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		
		
            <div className='flex justify-around w-full'>
			<div class="space-y-3">
				<h3 class="tracki uppercase  dark:text-gray-50">CATEGORIES</h3>
				<ul class="space-y-">
					<li>
						<a rel="noopener noreferrer" href="#">Web Builder</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Hosting</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Data Center</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Robotic-Automation</a>
					</li>
				</ul>
			</div>
			<div class="space-y-3">
				<h3 class="tracki uppercase dark:text-gray-50">CONTACT</h3>
				<ul class="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Contact</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Privacy Policy</a>
					</li>
                    <li>
						<a rel="noopener noreferrer" href="#">Terms Of Service</a>
					</li>
                    <li>
						<a rel="noopener noreferrer" href="#">Categories</a>
					</li>
                    <li>
						<a rel="noopener noreferrer" href="#">About</a>
					</li>
				</ul>
			</div>
            <div className='space-y-3' >
                <span> <label>United States</label><select name='United States' className='bg-transparent'></select></span>
            </div>

			
			
		</div>
	</div>
	
</footer>
       
  )
}

export default Footer