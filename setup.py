from setuptools import setup, find_packages

with open('requirements.txt') as f:
    requirements = f.read().splitlines()

setup(
    name='imaginaition',
    version='0.1.0',
    author='jtpotato',
    author_email='',
    description='Imagination and technology for a better world.',
    packages=find_packages(),
    entry_points={
        'console_scripts': [
            'imaginaition=imaginaition.__main__:main',
        ],
    },
    install_requires=requirements,
)
