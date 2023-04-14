from setuptools import setup, find_packages

setup(
    name='imaginaition',
    version='0.1.0',
    author='jtpotato',
    author_email='',
    description='Imagination and technology for a better world.',
    readme = "README.md",
    packages=find_packages(),
    entry_points={
        'console_scripts': [
            'imaginaition=imaginaition.__main__:main',
        ],
    },
    install_requires=["auto-editor", "rgbprint"],
)
