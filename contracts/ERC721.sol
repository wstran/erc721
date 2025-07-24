// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId = 1;

    constructor() ERC721("MyNFT", "MNFT") Ownable(msg.sender) {}

    function mint(address to, string memory tokenURI) external onlyOwner {
        uint256 tokenId = _nextTokenId;

        _nextTokenId++;

        _safeMint(to, tokenId);

        _setTokenURI(tokenId, tokenURI);
    }

    function nextTokenId() external view returns (uint256) {
        return _nextTokenId;
    }
}
